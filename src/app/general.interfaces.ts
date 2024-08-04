export interface SuccessResponse {
  message: string;
} 
export interface ErrorResponse extends SuccessResponse {};
export interface ToastMessage {
  type: 'success'|'error'|'warning'|'info',
  text: string;
}