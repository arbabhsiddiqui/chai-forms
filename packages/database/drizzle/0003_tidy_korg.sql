CREATE TYPE "public"."field_type_enm" AS ENUM('TEXT', 'NUMBER', 'SELECT', 'CHECKBOX', 'RADIO', 'DATE', 'EMAIL', 'PASSWORD', 'TEXTAREA', 'FILE', 'URL', 'TEL', 'COLOR', 'RANGE', 'TIME', 'WEEK', 'MONTH', 'YES_NO');--> statement-breakpoint
CREATE TABLE "form-fields" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"label" varchar(80) NOT NULL,
	"label_ key" varchar(80) NOT NULL,
	"description" text,
	"placeholder" text,
	"is_required" boolean DEFAULT false NOT NULL,
	"index" numeric NOT NULL,
	"type" "field_type_enm" NOT NULL,
	"form_id" uuid NOT NULL,
	"is_public " boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp,
	CONSTRAINT "form-fields_form_id_index_unique" UNIQUE("form_id","index")
);
--> statement-breakpoint
ALTER TABLE "form-fields" ADD CONSTRAINT "form-fields_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE no action ON UPDATE no action;