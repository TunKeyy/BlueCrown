CREATE TABLE "public"."users" (
  "id" UUID PRIMARY KEY,
  "name" TEXT,
  "email" TEXT,
  "firebaseId" TEXT,
  "avatar" TEXT,
  "status" TEXT default 'active',
  "phoneNumber" TEXT,
  "isMuted" BOOLEAN default false,
  "createdAt" TIMESTAMP default now(),
  "updatedAt" TIMESTAMP default now(),
  "createdBy" UUID,
  "updatedBy" UUID
);

CREATE TABLE "public"."daily_tasks" (
  "id" UUID PRIMARY KEY,
  "userId" UUID REFERENCES users("id"),
  "name" TEXT,
  "description" TEXT,
  "priority" TEXT,
  "status" TEXT,
  "deadline" TIMESTAMP,
  "taskStatus" TEXT,
  "createdAt" TIMESTAMP default now(),
  "updatedAt" TIMESTAMP default now(),
  "createdBy" UUID,
  "updatedBy" UUID
);

CREATE TABLE notes (
  "id" UUID PRIMARY KEY,
  "userId" UUID REFERENCES users("id"),
  "title" TEXT,
  "content" TEXT,
  "status" VARCHAR,
  "createdAt" TIMESTAMP default now(),
  "updatedAt" TIMESTAMP default now(),
  "createdBy" UUID,
  "updatedBy" UUID
);
