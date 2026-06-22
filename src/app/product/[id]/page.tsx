import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductDetailClient from "./ProductDetailClient";
import { allProducts, getProductById, getRelatedProducts } from "@/lib/products";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return allProducts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return <ProductDetailClient product={product} related={related} />;
}
