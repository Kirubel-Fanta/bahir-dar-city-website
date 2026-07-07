import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "Business Dashboard" };

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin?callbackUrl=/dashboard");

  const businesses = await prisma.business.findMany({
    where: { ownerId: session.user.id },
  });

  return (
    <div>
      <PageHeader eyebrow="Business" title={`Welcome, ${session.user.name?.split(" ")[0] ?? "there"}`} subtitle="Manage your business listings, hours, and offers." />
      <div className="container-page py-10">
        {businesses.length === 0 ? (
          <Card hover={false} className="p-6">
            <p className="text-stone-600">
              You don&apos;t manage any businesses yet. Once you submit and claim a business, it will appear here with
              tools to update hours, upload photos, respond to reviews, and post job openings.
            </p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {businesses.map((b) => (
              <Card key={b.id} hover={false} className="p-5">
                <h3 className="font-medium text-stone-900">{b.name}</h3>
                <p className="mt-1 text-sm text-stone-500">{b.reviewCount} reviews · {b.rating.toFixed(1)} rating</p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
