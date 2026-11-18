import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { services, CONTACT_HREF } from '../data/services';

export default function ServicesGrid() {
    return (
        <section id="services" className="bg-white px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="border border-gray-300 bg-[#f6f6f6]">
                    {/* Label */}
                    <div className="px-5 py-10 sm:py-14">
                        <span className="text-sm uppercase tracking-widest text-gray-900">
                            What we do
                        </span>
                    </div>

                    {/* Grid: 1px gaps over a grey background make the hairlines */}
                    <div className="grid grid-cols-1 gap-px border-t border-gray-300 bg-gray-300 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden bg-[#f6f6f6] p-5 transition-colors duration-300 hover:bg-[#1a1a1a] focus-visible:bg-[#1a1a1a] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#DB3246] sm:min-h-[280px] lg:min-h-[320px]"
                            >
                                <div className="flex items-start justify-between">
                                    <span
                                        aria-hidden="true"
                                        className="h-2.5 w-2.5 rounded-full border border-gray-900 transition-colors duration-300 group-hover:border-[#DB3246] group-hover:bg-[#DB3246] group-focus-visible:border-[#DB3246] group-focus-visible:bg-[#DB3246]"
                                    />
                                    <ArrowUpRight
                                        aria-hidden="true"
                                        className="h-5 w-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                                    />
                                </div>

                                <div>
                                    {/* Always visible on mobile, revealed on hover on desktop */}
                                    <p className="mb-3 max-w-[16rem] text-sm leading-snug text-gray-600 transition duration-300 group-hover:text-white/80 group-focus-visible:text-white/80 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100">
                                        {service.tagline}
                                    </p>
                                    <h2 className="text-3xl tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-white group-focus-visible:text-white">
                                        {service.name}
                                    </h2>
                                </div>

                                {/* Red line that draws across on hover */}
                                <span
                                    aria-hidden="true"
                                    className="absolute bottom-0 left-0 h-1 w-0 bg-[#DB3246] transition-all duration-500 group-hover:w-full group-focus-visible:w-full"
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Single call to action */}
                    <div className="flex flex-col items-start justify-between gap-4 border-t border-gray-300 px-5 py-8 sm:flex-row sm:items-center">
                        <p className="max-w-md text-gray-700">
                            Not sure which one you need? Tell us the problem and we will point you in the right direction.
                        </p>
                        <Link
                            href={CONTACT_HREF}
                            className="inline-flex items-center rounded-full bg-[#DB3246] px-6 py-2 font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DB3246]"
                        >
                            Start the Conversation
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}