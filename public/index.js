const reviews = [
  {
    review:
      "This show is hilarious! I love the characters and the jokes are always on point.",
    rating: 5,
  },
  {
    review:
      "I can't get enough of this show! I've watched every episode at least 3 times.",
    rating: 5,
  },
];

/**
 * Abstract class for storage adapters
 */
class StorageAdapter {
  /**
   * Loads data from storage
   * @returns {any}
   */
  load() {
    throw new Error("Not implemented");
  }

  /**
   * Saves data to storage
   * @param {any} data
   * @returns {void}
   */
  save(data) {
    throw new Error("Not implemented");
  }

  /**
   * Clears data from storage
   * @returns {void}
   */
  clear() {
    throw new Error("Not implemented");
  }
}

/** Local Storage Storage Adapter */
class LocalStorageStorageAdapter extends StorageAdapter {
  /**
   * @param {string} key
   */
  constructor(key) {
    super();
    this.key = key;
  }

  /**
   * Loads data from local storage
   * @returns {any}
   */
  load() {
    const data = localStorage.getItem(this.key);
    try {
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error("Failed to parse JSON from localStorage", e);
      return null;
    }
  }

  /**
   * Saves data to local storage
   * @param {any} data
   * @returns {void}
   */
  save(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  /**
   * Clears data from local storage
   * @returns {void}
   */
  clear() {
    localStorage.removeItem(this.key);
  }
}

class ReviewCard {
  /**
   * @param {{review: string, rating: number}} review
   * @param {ReviewList} reviewList
   */
  constructor(review, reviewList) {
    this.review = review;
    this.reviewList = reviewList;

    this.element = document.createElement("div");
    this.element.classList.add("review-card");

    this.render();
  }

  removeItem() {
    this.reviewList.removeReviewByReference(this.review);
  }

  /**
   * Renders the review card
   */
  render() {
    this.element.innerHTML = "";

    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review-card__review");
    reviewElement.textContent = this.review.review;

    const ratingElement = document.createElement("div");
    ratingElement.classList.add("review-card__rating");
    ratingElement.textContent = `${this.review.rating} / 5`;

    const removeButtonElement = document.createElement("button");
    removeButtonElement.classList.add("review-card__delete-button", "button");
    removeButtonElement.textContent = "Remove";
    removeButtonElement.addEventListener("click", () => {
      this.removeItem();
    });

    this.element.appendChild(reviewElement);
    this.element.appendChild(ratingElement);
    this.element.appendChild(removeButtonElement);
  }
}

class ReviewList {
  /**
   * @param {{review: string, rating: number}[]} reviews
   * @param {HTMLElement} averageRatingElement
   * @param {StorageAdapter} storageAdapter
   */
  constructor(
    reviews,
    averageRatingElement,
    storageAdapter = new LocalStorageStorageAdapter("reviews")
  ) {
    if (storageAdapter instanceof StorageAdapter === false) {
      throw new Error("Invalid storage adapter provided");
    }

    const savedReviews = storageAdapter.load();

    this.reviews = savedReviews || reviews;
    this.averageRatingElement = averageRatingElement;
    this.storageAdapter = storageAdapter;

    this.element = document.createElement("div");
    this.element.classList.add("review-list");

    this.storageAdapter.save(this.reviews);
    this.updateAverageRating();
    this.render();
  }

  /**
   * Returns the average rating of all reviews
   * @returns {number}
   */
  get averageRating() {
    const totalRating = this.reviews.reduce(
      (acc, review) => acc + review.rating,
      0
    );
    return totalRating / this.reviews.length;
  }

  updateAverageRating() {
    if (!this.averageRatingElement) return;

    this.averageRatingElement.textContent = `${this.averageRating.toFixed(1)} / 5`;
  }

  /**
   * Adds a review to the reviews array and re-renders the review list
   * @param {{review: string, rating: number}} review
   * @param {'start' | 'end'} location
   */
  addReview(review, location = "end") {
    if (
      typeof review.rating !== "number" ||
      review.rating < 1 ||
      review.rating > 5
    ) {
      throw new Error(
        "Invalid rating. Rating must be a number between 1 and 5."
      );
    }

    if (location === "start") {
      this.reviews.unshift(review);
    } else if (location === "end") {
      this.reviews.push(review);
    } else {
      throw new Error("Invalid location provided");
    }

    this.storageAdapter.save(this.reviews);
    this.updateAverageRating();
    this.render();
  }

  /**
   * Removes a review from the reviews array by index and re-renders the review list
   * @param {number} index
   */
  removeReviewByIndex(index) {
    if (index < 0 || index >= this.reviews.length) {
      throw new Error("Index out of bounds");
    }

    this.reviews.splice(index, 1);

    this.storageAdapter.save(this.reviews);
    this.updateAverageRating();
    this.render();
  }

  /**
   * Removes a review from the reviews array by reference and re-renders the review list
   * @param {{review: string, rating: number}} review
   */
  removeReviewByReference(review) {
    const index = this.reviews.indexOf(review);
    if (index === -1) {
      throw new Error("Review not found");
    }
    this.removeReviewByIndex(index);
  }

  /**
   * Renders the review list
   */
  render() {
    this.element.innerHTML = "";

    this.reviews.forEach((review) => {
      const reviewCard = new ReviewCard(review, this);
      this.element.appendChild(reviewCard.element);
    });
  }
}

// Create a new ReviewList instance and mount it to the DOM
const averageRatingElement = document.getElementById("average-rating");
const reviewList = new ReviewList(reviews, averageRatingElement);
const reviewListMountElement = document.getElementById("review-list");
reviewListMountElement.appendChild(reviewList.element);

/**
 * Handles form submission for adding a new review
 * @param {Event} event
 */
const reviewFormSubmitHandler = (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const formValues = {};
  formData.forEach((value, key) => {
    formValues[key] = value;
  });

  const review = {
    review: formValues.review,
    rating: parseInt(formValues.rating, 10),
  };

  try {
    reviewList.addReview(review, "start");
  } catch (error) {
    alert(error.message);
  }

  form.reset();
};
