import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CategoryPageClient from "./CategoryPageClient";
import { categories, getProductsByCategory, type Category } from "@/lib/products";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.id === category);
  if (!cat) return {};
  return {
    title: `${cat.name} — Handcrafted ${cat.name}`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = categories.find((c) => c.id === category);
  if (!cat) notFound();

  const products = getProductsByCategory(cat.id as Category);

  return <CategoryPageClient category={cat} products={products} />;
}
