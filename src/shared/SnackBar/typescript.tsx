export interface SnackBarProps {
    open: boolean
    severity: "success" | "info" | "warning" | "error"
    message: string
}