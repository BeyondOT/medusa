import { DeleteResponse, DeleteResponseWithParent, PaginatedResponse } from "../../common"
import { AdminInventoryItem } from "./entities"

export interface AdminInventoryItemResponse {
  inventory_item: AdminInventoryItem
}

export type AdminInventoryItemListResponse = PaginatedResponse<{
  inventory_items: AdminInventoryItem[]
}>

export type AdminInventoryItemDeleteResponse = DeleteResponse<"inventory_item">

export type AdminInventoryLevelDeleteResponse = DeleteResponseWithParent<
  "inventory-level",
  AdminInventoryItem
>