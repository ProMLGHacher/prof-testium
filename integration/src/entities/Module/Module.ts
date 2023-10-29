export type Module = {
    name: string
    urlFile?: string | undefined | null
}

export const enum UserRole {
    Common = "Common",
    Organization = "Organization",
    Admin = "Admin",
}