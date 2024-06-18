CREATE SCHEMA "umbridge";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "umbridge"."users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email" "char" NOT NULL,
	"password" "char" NOT NULL
);
