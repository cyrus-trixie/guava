import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { services, getService, CONTACT_HREF } from '../../data/services';

type Props = { params: Promise<{ slug: string }> };

// Builds one page per service at build time
export function generateStaticParams() {
    return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = getService(slug);
    if (!service) return {};

    return {
        title: `${service.name} | NuruTek Solutions`,
        description: service.intro,
    };
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = getService(slug);
    if (!service) notFound();

    return (
        <main>
            <Header />

            {/* Hero */}
            <section className="bg-[#1a1a1a] px-6 pb-20 pt-44 text-white">
                <div className="mx-auto max-w-6xl">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                    >
                        <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                        All services
                    </Link>

                    <h1 className="mt-8 max-w-3xl text-4xl tracking-tight sm:text-5xl lg:text-6xl">
                        {service.promise}
                    </h1>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                        {service.intro}
                    </p>

                    <Link
                        href={CONTACT_HREF}
                        className="mt-10 inline-flex items-center rounded-full bg-[#DB3246] px-6 py-2 font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                        Start the Conversation
                    </Link>
                </div>
            </section>

            {/* What you get */}
            <section className="bg-white px-6 py-20">
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_2fr]">
                    <h2 className="text-3xl tracking-tight text-gray-900">What you get</h2>
                    <ul className="divide-y divide-gray-200 border-y border-gray-200">
                        {service.gets.map((item) => (
                            <li key={item} className="flex items-start gap-4 py-5">
                                <Check
                                    aria-hidden="true"
                                    className="mt-1 h-5 w-5 shrink-0 text-[#DB3246]"
                                />
                                <span className="text-lg text-gray-800">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Example project, only when we have one that fits */}
            {service.example && (
                <section className="bg-[#f6f6f6] px-6 py-20">
                    <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_2fr]">
                        <h2 className="text-3xl tracking-tight text-gray-900">
                            Something we have built
                        </h2>
                        <a
                            href={service.example.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between border border-gray-300 bg-white p-6 transition-colors hover:border-[#DB3246]"
                        >
                            <div>
                                <p className="text-2xl text-gray-900">{service.example.name}</p>
                                <p className="mt-1 text-gray-600">{service.example.description}</p>
                            </div>
                            <ArrowUpRight
                                aria-hidden="true"
                                className="h-6 w-6 text-gray-400 transition-colors group-hover:text-[#DB3246]"
                            />
                        </a>
                    </div>
                </section>
            )}

            {/* FAQs: native details/summary, no JavaScript needed */}
            <section className="bg-white px-6 py-20">
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_2fr]">
                    <h2 className="text-3xl tracking-tight text-gray-900">Common questions</h2>
                    <div className="divide-y divide-gray-200 border-y border-gray-200">
                        {service.faqs.map((faq) => (
                            <details key={faq.q} className="group py-5">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg text-gray-900 [&::-webkit-details-marker]:hidden">
                                    {faq.q}
                                    <span
                                        aria-hidden="true"
                                        className="text-2xl leading-none text-[#DB3246] transition-transform group-open:rotate-45"
                                    >
                                        +
                                    </span>
                                </summary>
                                <p className="mt-3 max-w-xl leading-relaxed text-gray-600">
                                    {faq.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing call to action */}
            <section className="bg-[#1a1a1a] px-6 py-20 text-white">
                <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                    <h2 className="max-w-xl text-3xl tracking-tight">
                        Tell us what you need and we will tell you how we would build it.
                    </h2>
                    <Link
                        href={CONTACT_HREF}
                        className="inline-flex items-center rounded-full bg-[#DB3246] px-6 py-2 font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                        Start the Conversation
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}