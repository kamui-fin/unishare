import { Schema, model } from "mongoose"
import { AutoIncrement } from "../db"

export interface File {
    userId: number
    fileId: string
    mimeType: string
    seq: number
}

const schema = new Schema<File>({
    userId: { type: Number, required: true },
    fileId: { type: String, required: true },
    mimeType: { type: String, required: true },
})

schema.plugin(AutoIncrement, { inc_field: "seq" })

export const FileModel = model<File>("File", schema)
