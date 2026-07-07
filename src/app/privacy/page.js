import PageHeader from "@/components/layout/PageHeader";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div>
      <PageHeader eyebrow="Legal" title="Privacy policy" />
      <div className="container-page max-w-2xl py-10 text-stone-600">
        <p>
          Bahir Dar City collects only the information needed to operate the platform: account details you provide,
          business or event submissions, reviews, and basic usage analytics to improve the site.
        </p>
        <p className="mt-4">
          We do not sell personal information to third parties. Data submitted for business listings, events, and
          marketplace posts is displayed publicly as intended. You can request account deletion at any time by
          contacting us.
        </p>
      </div>
    </div>
  );
}
