import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display, Alex_Brush } from 'next/font/google';
import { getMessages, getLocale } from 'next-intl/server';
import { ThemeProvider, I18nProvider, SmoothScrollProvider } from '@/providers';

import '@/styles/globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const signature = Alex_Brush({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-signature',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'Ayush Singh | AI & Machine Learning Engineer',
        template: '%s | Portfolio',
    },
    description: 'Portfolio of Ayush Singh, an AI & Machine Learning Engineer specializing in Deep Learning, Computer Vision, Generative AI, Data Science, and Python development.',
    keywords: [
        'Ayush Singh',
        'AI Engineer',
        'Machine Learning Engineer',
        'Generative AI Developer',
        'Data Scientist',
        'Python Developer',
        'Computer Vision',
        'Deep Learning',
        'Portfolio'
    ],
    authors: [{ name: 'Ayush Singh' }],
    creator: 'Ayush Singh',
    metadataBase: new URL('https://github.com/Ayush-0915'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://github.com/Ayush-0915',
        title: 'Ayush Singh | AI & Machine Learning Engineer',
        description: 'Explore the projects, skills, and professional journey of Ayush Singh, AI & Machine Learning Engineer.',
        siteName: 'Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ayush Singh | AI & Machine Learning Engineer',
        description: 'Explore the projects, skills, and professional journey of Ayush Singh, AI & Machine Learning Engineer.',
        creator: '@Ayush-0915',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.svg',
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
    ],
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
};

import { ThemeAwareClickSpark } from '@/components/ui/ThemeAwareClickSpark';
import { ConditionalNavigation } from '@/components/layout/ConditionalNavigation';
import { ChatBot } from '@/components/layout/ChatBot';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
            <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} ${signature.variable} font-sans relative`}>
                <ThemeProvider>
                    <I18nProvider locale={locale} messages={messages}>
                        <SmoothScrollProvider>
                            <ThemeAwareClickSpark>
                                <ConditionalNavigation>
                                    {children}
                                </ConditionalNavigation>
                                <ChatBot headless />
                            </ThemeAwareClickSpark>
                        </SmoothScrollProvider>
                    </I18nProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
