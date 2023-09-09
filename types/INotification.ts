export interface INotification {
  title: string
  body: string
  type: 'success' | 'error' | 'warning' | 'info'
}
