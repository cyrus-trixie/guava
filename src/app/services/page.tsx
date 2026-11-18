import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesGrid from '../components/ServicesGrid';

export const metadata: Metadata = {
    title: 'Services | NuruTek Solutions',
    description:
        'Business systems, web and mobile apps, M-Pesa integrations, internal tools and ongoing support, built for businesses in Kenya and East Africa.',
};

export default function ServicesPage() {
    return (
        <main>
            <Header />

            {/* Hero: top padding clears the fixed header */}
            <section className="bg-[#1a1a1a] px-6 pb-20 pt-44 text-white">
                <div className="mx-auto max-w-6xl">
                    <h1 className="max-w-3xl text-4xl tracking-tight sm:text-5xl lg:text-6xl">
                        Software built around how your business works.
                    </h1>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                        Pick a service to see what we build and what you get.
                    </p>
                </div>
            </section>

            <ServicesGrid />

            <Footer />
        </main>
    );
}