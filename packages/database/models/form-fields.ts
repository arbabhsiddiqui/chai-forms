import {
    pgTable,
    uuid,
    varchar,
    timestamp,
    boolean,
    text,
    numeric,
    pgEnum,
    unique
} from "drizzle-orm/pg-core";
import { formsTable } from "../schema";




export const fieldTypeEnm = pgEnum('field_type_enm', ['TEXT', 'NUMBER', 'SELECT', 'CHECKBOX', 'RADIO', 'DATE', 'EMAIL', 'PASSWORD', 'TEXTAREA', 'FILE', 'URL', 'TEL', 'COLOR', 'RANGE', 'TIME', 'WEEK', 'MONTH', 'YES_NO']);

export const formsFieldsTable = pgTable("form-fields", {
    id: uuid("id").primaryKey().defaultRandom(),

    label: varchar("label", { length: 80 }).notNull(),
    labelKey: varchar("label_ key", { length: 80 }).notNull(),
    description: text("description"),
    placeholder: text("placeholder"),
    isRequired: boolean("is_required").default(false).notNull(),
    index: numeric('index', { scale: 2 }).notNull(),
    type: fieldTypeEnm("type").notNull(),


    formId: uuid("form_id").references(() => formsTable.id).notNull(),

    isPublic: boolean("is_public ").default(false),

    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
}, (table) => {
    return {
        uniqueFormIdAndIndex: unique().on(table.formId, table.index)
    }
});

