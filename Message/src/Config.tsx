
export const API_IP_ADRESS = "35.221.108.152";

export const POST_FORM_NAME = "postformname";

export const POST_FORM_ID = "postformid";

export const POST_NAME_NAME = "input_name";

export const POST_MESSAGE_NAME = "input_message"

export const POST_FILE_FORM_NAME = "input_file"

export interface ThreadObj{
    id: number
    timestamp: string
    name: string
    message: string
    fileurl: string | undefined
}