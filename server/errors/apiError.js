'use strict';

class ApiError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static errorRequest(message) {
    return new ApiError(404, message);
  }

  static internalRequest(message) {
    return new ApiError(500, message);
  }

  static forbiddenRequest(message) {
    return new ApiError(403, message);
  }

}

module.exports = ApiError;
