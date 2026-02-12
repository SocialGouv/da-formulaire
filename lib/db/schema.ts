import {
  pgTable,
  uuid,
  text,
  boolean,
  timestamp,
  jsonb,
  integer,
  unique,
} from "drizzle-orm/pg-core";
import type { DAData } from "@/types/da.types";

// ============================================================================
// USERS
// ============================================================================

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  proconnectSub: text("proconnect_sub").notNull().unique(),
  email: text("email").notNull(),
  givenName: text("given_name"),
  usualName: text("usual_name"),
  isAdmin: boolean("is_admin").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

// ============================================================================
// FORMS (Documents d'Architecture)
// ============================================================================

export const forms = pgTable("forms", {
  id: uuid("id").primaryKey().defaultRandom(),
  nom: text("nom").notNull(),
  data: jsonb("data").notNull().$type<DAData>(),
  createdBy: uuid("created_by").references(() => users.id),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

// ============================================================================
// FORM ACCESS (partage des DA)
// ============================================================================

export const formAccess = pgTable(
  "form_access",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    formId: uuid("form_id")
      .notNull()
      .references(() => forms.id, { onDelete: "cascade" }),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    role: text("role", { enum: ["viewer", "editor"] })
      .notNull()
      .default("editor"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [unique("form_access_unique").on(table.formId, table.userId)],
);

// ============================================================================
// VERSIONS / SNAPSHOTS (versions nommées des DA)
// ============================================================================

export const versions = pgTable("versions", {
  id: uuid("id").primaryKey().defaultRandom(),
  formId: uuid("form_id")
    .notNull()
    .references(() => forms.id, { onDelete: "cascade" }),
  versionNumber: integer("version_number").notNull(),
  name: text("name").notNull(), // Nom du snapshot (obligatoire)
  data: jsonb("data").notNull().$type<DAData>(),
  createdBy: uuid("created_by").references(() => users.id),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

// ============================================================================
// EDIT LOGS (journal des modifications)
// ============================================================================

export const editLogs = pgTable("edit_logs", {
  id: uuid("id").primaryKey().defaultRandom(),
  formId: uuid("form_id")
    .notNull()
    .references(() => forms.id, { onDelete: "cascade" }),
  userId: uuid("user_id").references(() => users.id),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
