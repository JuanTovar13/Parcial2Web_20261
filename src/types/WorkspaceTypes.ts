
export type Workspace = {
    id: string |number
    name: string
    type: string
    capacity: number
    location: string
    pricePerHour: number
    available: boolean
}

export type InitialWorkspaces={
    workspace: Workspace[]
    reserved: Workspace[]
}