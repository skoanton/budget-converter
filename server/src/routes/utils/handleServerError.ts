import { Response } from "express";

interface ErrorResponse {
    error: string;
  }
  
  export function handleServerError(
    res: Response<any, ErrorResponse>,
    error: any // 
  ): void {
    console.error("Internal server error:", error); // Logga felet för felsökning
    res.status(500).json({ error: "Internal server error" }); // Skicka ett 500-felmeddelande till klienten
  }