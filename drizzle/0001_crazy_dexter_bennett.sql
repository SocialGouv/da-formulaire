CREATE TABLE "edit_logs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"form_id" uuid NOT NULL,
	"user_id" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
DELETE FROM "versions" WHERE "name" IS NULL;--> statement-breakpoint
ALTER TABLE "versions" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "edit_logs" ADD CONSTRAINT "edit_logs_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "edit_logs" ADD CONSTRAINT "edit_logs_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;