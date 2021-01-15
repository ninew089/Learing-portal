export interface SnackBarProps {
    open: boolean
    severity: "success" | "info" | "warning" | "error" | undefined
    message: string
}