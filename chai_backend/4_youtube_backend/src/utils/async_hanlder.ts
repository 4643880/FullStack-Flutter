import express from "express";

// Created wrapper function that is passing a function in parameter and calling it in the try block and handling the exceptions

const asyncHandler = (fn: Function) => {
    return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
      try {
        await fn(req, res, next);
      } catch (error : any) {
        return res.status(error.code || 500).json({
          success: false,
          message: error.message,
        });
      }
    };
  };
  
  // Export the asyncHandler function
  export { asyncHandler };
