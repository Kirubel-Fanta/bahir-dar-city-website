import PageHeader from "@/components/layout/PageHeader";
import BusinessSubmitForm from "@/components/forms/BusinessSubmitForm";
import { getCategories } from "@/lib/data";

export const metadata = { title: "Add Your Business" };

export default async function SubmitBusinessPage() {
  const categories = await getCategories();

  return (
    <div>
      <PageHeader
        eyebrow="Business"
        title="Add your business"
        subtitle="Get listed in the Bahir Dar directory for free. Submissions are reviewed before publishing."
      />
      <div className="container-page max-w-2xl py-10">
        <BusinessSubmitForm categories={categories} />
      </div>
    </div>
  );
}
