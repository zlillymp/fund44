"use client";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import {
  AcademicCapIcon,
  BuildingStorefrontIcon,
  WrenchScrewdriverIcon,
  BuildingOffice2Icon,
  HeartIcon,
  TruckIcon,
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const speedStories = [
  {
    icon: AcademicCapIcon,
    industry: "Education",
    state: "California",
    amount: "$175K",
    daysToFund: 1,
    numLenders: 8,
    description:
      "Needed capital fast to stabilize operations during a critical enrollment period. Eight lenders competed for the deal.",
  },
  {
    icon: BuildingStorefrontIcon,
    industry: "Restaurant Group",
    state: "Pennsylvania",
    amount: "$150K",
    daysToFund: 1,
    numLenders: 5,
    description:
      "A 24-year-old multi-location operation needed immediate funding to keep pace with demand. Five lenders responded same-day.",
  },
  {
    icon: WrenchScrewdriverIcon,
    industry: "Specialty Contracting",
    state: "Texas",
    amount: "$200K",
    daysToFund: 4,
    numLenders: 6,
    description:
      "Needed a significant capital infusion to keep a growing operation stable. Six lenders competed to deliver the best terms.",
  },
  {
    icon: BuildingOffice2Icon,
    industry: "Construction",
    state: "Minnesota",
    amount: "$115K",
    daysToFund: 1,
    numLenders: 2,
    description:
      "A fast-growing firm with $3M+ in revenue needed capital to bridge a seasonal gap. Funded before the end of business.",
  },
  {
    icon: HeartIcon,
    industry: "Healthcare",
    state: "Florida",
    amount: "$123K",
    daysToFund: 2,
    numLenders: 4,
    description:
      "A young practice scaling quickly needed flexible capital without slowing down. Four lenders competed and funded in 48 hours.",
  },
  {
    icon: TruckIcon,
    industry: "Transportation",
    state: "New York",
    amount: "$100K",
    daysToFund: 1,
    numLenders: 5,
    description:
      "Daily operations couldn't stop for a funding process. Five lenders stepped up and capital hit the account the same day.",
  },
];

export default function TestimonialsSection1() {
  return (
    <section
      className="bg-secondary/40 border-y border-border/50 section-padding-y"
      id="case-studies"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-14">
          {/* Section Header */}
          <div className="mx-auto flex max-w-xl flex-col items-center text-center gap-4">
            <Tagline>Speed Stories</Tagline>
            <h2 className="heading-lg">When time was everything</h2>
            <p className="text-muted-foreground font-light text-lg">
              These businesses couldn&apos;t wait weeks for an answer. Our
              marketplace matched them with competing lenders and delivered
              capital in days, not months.
            </p>
          </div>

          {/* Speed Story Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speedStories.map((story) => {
              const Icon = story.icon;
              return (
                <div
                  key={`${story.industry}-${story.state}`}
                  className="border border-border rounded-xl bg-background shadow-xs hover:shadow-md transition-all duration-300 p-6 flex flex-col gap-5"
                >
                  {/* Icon + Industry + State */}
                  <div className="flex items-start gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-base font-semibold text-foreground">
                        {story.industry}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {story.state}
                      </span>
                    </div>
                  </div>

                  {/* Amount */}
                  <span className="text-3xl font-bold text-amber tracking-tight">
                    {story.amount}
                  </span>

                  {/* Speed + Lenders Metrics */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <ClockIcon className="size-3.5 text-primary" />
                      <span className="text-sm font-semibold text-foreground">
                        {story.daysToFund === 1
                          ? "1 day"
                          : `${story.daysToFund} days`}
                      </span>
                    </div>
                    <div className="h-3.5 w-px bg-border" />
                    <div className="flex items-center gap-1.5">
                      <UserGroupIcon className="size-3.5 text-primary" />
                      <span className="text-sm font-semibold text-foreground">
                        {story.numLenders}{" "}
                        {story.numLenders === 1 ? "lender" : "lenders"}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {story.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Summary stat + CTA */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-muted-foreground">
              Based on anonymized data from 2,400+ funded businesses across 35 states.
            </p>
            <a
              href="#eligibility"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              See what you qualify for →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
