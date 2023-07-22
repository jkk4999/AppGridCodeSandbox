import { faker } from "@faker-js/faker";

import type { SexType } from "@faker-js/faker";

type IndustryType =
  | "Healthcare"
  | "Insurance"
  | "Chemicals"
  | "Technology"
  | "Shipping"
  | "Electronics"
  | "Media & Entertainment"
  | "Energy"
  | "Utilities"
  | "Agriculture"
  | "Hospitality"
  | "Engineering"
  | "Transportation"
  | "Education"
  | "Retail"
  | "Banking"
  | "Contruction"
  | "Manufacturing"
  | "Finance";

const industries: string[] = [
  "Agriculture",
  "Banking",
  "Chemicals",
  "Contruction",
  "Education",
  "Electronics",
  "Energy",
  "Engineering",
  "Finance",
  "Healthcare",
  "Hospitality",
  "Insurance",
  "Manufacturing",
  "Media & Entertainment",
  "Retail",
  "Shipping",
  "Technology",
  "Transportation",
  "Utilities"
];

type AccountCategoryType = "Enterprise" | "Mid Market" | "Small Business";

const accountCategories = ["Enterprise", "Mid Market", "Small Business"];

type AccountSourceType =
  | "Other"
  | "Phone Inquery"
  | "Web"
  | "Purchased List"
  | "Partner Referral";

const accountSources = [
  "Other",
  "Phone Inquery",
  "Web",
  "Purchased List",
  "Partner Referral"
];

type OwnershipType =
  | "Public"
  | "Private"
  | "Subsidiary"
  | "Non Profit"
  | "Government";

const ownerships = [
  "Public",
  "Private",
  "Subsidiary",
  "Non Profit",
  "Government"
];

type AccountRatingType = "Hot" | "Warm" | "Cold";

const accountRatings = ["Hot", "Warm", "Cold"];

type AccountType =
  | "Channel Partner"
  | "Customer - Direct"
  | "Customer - Channel"
  | "Press"
  | "Prospect";

const accountTypes = [
  "Channel Partner",
  "Customer - Direct",
  "Customer - Channel",
  "Press",
  "Prospect"
];

const activeTypes = [true, false];

interface Account {
  Id: string;
  Name: string;
  Industry: IndustryType;
  Type: AccountType;
  Category: AccountCategoryType;
  AccountSource: AccountSourceType;
  Ownership: OwnershipType;
  Rating: AccountRatingType;
  AnnualRevenue: number;
  AccountNumber: string;
  NumberOfEmployees: number;
  Website: string;
  CreatedDate: Date;
  Active: boolean;
  OwnerId: string;
  Phone: string;
  Fax: string;
  YearStarted: string;
  CreatedById: string;
  BillingStreet: string;
  BillingCity: string;
  BillingState: string;
  BillingPostalCode: string;
  BillingCountry: string;
  BillingLatitude: number;
  BillingLongitude: number;
  ShippingStreet: string;
  ShippingCity: string;
  ShippingState: string;
  ShippingPostalCode: string;
  ShippingCountry: string;
  ShippingLatitude: number;
  ShippingLongitude: number;
}

export function createRandomAccount(
  ownerId: string,
  createdById: string
): Account {
  const yearStarted = faker.number.int({ min: 1990, max: 2022 }).toString();

  return {
    Id: faker.string.alphanumeric(15),
    Name: faker.company.name(),
    Industry: faker.helpers.arrayElement(industries) as IndustryType,
    Type: faker.helpers.arrayElement(accountTypes) as AccountType,
    Category: faker.helpers.arrayElement(
      accountCategories
    ) as AccountCategoryType,
    AccountSource: faker.helpers.arrayElement(
      accountSources
    ) as AccountSourceType,
    Ownership: faker.helpers.arrayElement(ownerships) as OwnershipType,
    Rating: faker.helpers.arrayElement(accountRatings) as AccountRatingType,
    AnnualRevenue: faker.number.int({ min: 1000000, max: 1000000000 }),
    AccountNumber: faker.finance.accountNumber({ length: 10 }),
    NumberOfEmployees: faker.number.int({ min: 100, max: 100000 }),
    Website: faker.internet.url({ protocol: "http", appendSlash: false }),
    CreatedDate: faker.date.past({ years: 4 }),
    Active: faker.helpers.arrayElement(activeTypes),
    OwnerId: ownerId,
    CreatedById: createdById,
    Phone: faker.phone.number(),
    Fax: faker.phone.number(),
    YearStarted: yearStarted,
    BillingStreet: faker.address.streetAddress(),
    BillingCity: faker.location.city(),
    BillingState: faker.location.state(),
    BillingPostalCode: faker.location.zipCode(),
    BillingCountry: faker.location.country(),
    BillingLatitude: faker.location.latitude(),
    BillingLongitude: faker.location.longitude(),
    ShippingStreet: faker.location.streetAddress(),
    ShippingCity: faker.location.city(),
    ShippingState: faker.location.state(),
    ShippingPostalCode: faker.location.zipCode(),
    ShippingCountry: faker.location.country(),
    ShippingLatitude: faker.location.latitude(),
    ShippingLongitude: faker.location.longitude()
  };
}
