import PageHeader from "@/components/layout/PageHeader";

export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <div>
      <PageHeader eyebrow="Legal" title="Terms of service" />
      <div className="container-page max-w-2xl py-10 text-stone-600">
        <p>
          By using Bahir Dar City, you agree to submit accurate information for businesses, events, and marketplace
          listings, and not to post content that is fraudulent, abusive, or infringes on others' rights.
        </p>
        <p className="mt-4">
          Submissions (businesses, events, reviews, and photos) may be reviewed and moderated before or after
          publishing. We reserve the right to remove content that violates these terms.
        </p>
      </div>
    </div>
  );
}
