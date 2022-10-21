export interface WorkerParams<T> {
    payload: T;
    type: string;
  }

export type FilterPayloadTypes = {
    page?: number;
    size?: number;
    code?: string;
    sku?: string;
    name?: string;
    barcodes?: string;
    description?: string;
    warehouse_id?: string;
    number?: string;
    state?: string;
    category_id?: string;
    outbound_id?: string;
    inventory_id?: string;
    interval_id?: string;
    taken_by?: string;
    type_of_operation?: string
    sequence_method?: string
    code_of_functional_zone?: string
  };

export interface ResponseError {
    status: string;
    code: string;
    message: string;
    validation?: Array<Object>;
  }

export type DoublePayload<Payload, LocalPayload> = {
    payload: Payload;
    localPayload: LocalPayload;
  };