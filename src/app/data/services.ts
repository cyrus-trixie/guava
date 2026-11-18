export type Service = {
    slug: string;
    name: string;
    /** One line shown on tile hover (always visible on mobile) */
    tagline: string;
    /** Headline promise on the service's own page */
    promise: string;
    /** Short paragraph under the promise */
    intro: string;
    /** What the client gets */
    gets: string[];
    /** One of our projects, only where it genuinely fits */
    example?: { name: string; description: string; href: string };
    faqs: { q: string; a: string }[];
};

// Where every "Start the Conversation" button goes.
// Change this one value when we decide on WhatsApp, email or a form.
export const CONTACT_HREF = '/#contact';

export const services: Service[] = [
    {
        slug: 'business-systems',
        name: 'Business Systems',
        tagline: 'One system for stock, sales, invoices and staff.',
        promise: 'Run your whole business from one place.',
        intro:
            'We build ERP and operations systems around how your business actually works, so you stop juggling spreadsheets, notebooks and WhatsApp threads.',
        gets: [
            'Inventory, sales and invoicing in one system',
            'Staff roles and permissions',
            'Reports you can read without a finance degree',
            'Training and support at launch',
        ],
        example: {
            name: 'Vend Grid',
            description: 'A point of sale system for retail.',
            href: 'https://vend-grid-main.vercel.app/',
        },
        faqs: [
            {
                q: 'Do you build from scratch or customize existing software?',
                a: 'We build around your processes. After a short discovery call we tell you plainly which parts need to be custom and which do not.',
            },
            {
                q: 'Can you move our existing records into the new system?',
                a: 'Yes. We import from spreadsheets and other formats as part of the project.',
            },
        ],
    },
    {
        slug: 'web-applications',
        name: 'Web Applications',
        tagline: 'Portals, dashboards and booking platforms.',
        promise: 'Web apps your customers and team can use on any device.',
        intro:
            'From booking platforms to client portals and dashboards, we design and build web applications that are fast, clear and easy to use.',
        gets: [
            'Responsive design that works on phones and desktops',
            'User accounts and secure sign-in',
            'Admin dashboard to manage your content and data',
            'Deployment and hosting set up for you',
        ],
        example: {
            name: 'Seen Heard Elevated',
            description: 'A therapist booking platform.',
            href: 'https://seenheardelevated.com/',
        },
        faqs: [
            {
                q: 'Who owns the code?',
                a: 'We agree ownership and handover terms in writing before work starts.',
            },
            {
                q: 'Can the app grow later?',
                a: 'Yes. We build it so new features can be added without starting over.',
            },
        ],
    },
    {
        slug: 'mobile-apps',
        name: 'Mobile Apps',
        tagline: 'Apps your customers keep on their phones.',
        promise: 'A mobile app that people actually keep installed.',
        intro:
            'We build mobile apps for Android and iOS that are simple to use, quick to load and built around one clear job.',
        gets: [
            'Android and iOS from one codebase',
            'Clean, simple screens designed for small displays',
            'Connection to your existing systems and data',
            'Help publishing to the app stores',
        ],
        faqs: [
            {
                q: 'Do I need a mobile app or is a website enough?',
                a: 'Often a good web app is enough. If you do not need an app, we will say so.',
            },
            {
                q: 'Do you handle the Play Store and App Store listing?',
                a: 'Yes. We help with the setup and submission.',
            },
        ],
    },
    {
        slug: 'mpesa-payments',
        name: 'M-Pesa & Payments',
        tagline: 'Take payments through M-Pesa, automatically.',
        promise: 'Get paid through M-Pesa without chasing confirmations.',
        intro:
            'We connect M-Pesa to your website, app or system so payments are confirmed and recorded automatically.',
        gets: [
            'M-Pesa checkout inside your website or app',
            'Automatic payment confirmation and receipts',
            'Payments recorded straight into your system',
            'Clear records for reconciliation',
        ],
        faqs: [
            {
                q: 'Do I need a Safaricom account first?',
                a: 'You need the right Safaricom setup for your business. We guide you through what to apply for.',
            },
            {
                q: 'Can you add it to a system you did not build?',
                a: 'Often yes. Send us the details and we will check what is possible.',
            },
        ],
    },
    {
        slug: 'internal-tools',
        name: 'Internal Tools & Automation',
        tagline: 'Replace repeated manual work with software.',
        promise: 'Stop doing by hand what software can do for you.',
        intro:
            'If your team copies data between sheets, chases approvals or builds the same report every week, we turn that into a tool that does it for them.',
        gets: [
            'Tools built for the exact task your team repeats',
            'Automated reports and notifications',
            'Simple interfaces your staff can learn quickly',
            'Connections between the tools you already use',
        ],
        example: {
            name: 'ClientOps',
            description: 'A client management system.',
            href: 'https://clientops.vercel.app/',
        },
        faqs: [
            {
                q: 'Is this only for big companies?',
                a: 'No. Small teams often gain the most from removing manual work.',
            },
            {
                q: 'How do we decide what to automate first?',
                a: 'We start with the task that costs your team the most time each week.',
            },
        ],
    },
    {
        slug: 'support-maintenance',
        name: 'Support & Maintenance',
        tagline: 'We keep your systems running smoothly.',
        promise: 'Someone to call when your software needs attention.',
        intro:
            'Software needs care after launch. We provide ongoing support, fixes and updates so your systems stay reliable as your business changes.',
        gets: [
            'Bug fixes and security updates',
            'Backups and monitoring',
            'Small improvements as your needs change',
            'A direct line to the people who built it',
        ],
        faqs: [
            {
                q: 'Can you support a system someone else built?',
                a: 'In many cases yes. We review it first and tell you honestly what we can take on.',
            },
            {
                q: 'How is support priced?',
                a: 'We agree a support plan that fits your system and how much help you need.',
            },
        ],
    },
];

export const getService = (slug: string) =>
    services.find((service) => service.slug === slug);