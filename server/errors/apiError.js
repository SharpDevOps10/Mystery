'use strict';

class ApiError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
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
