'use client';

// Imports
import TopSection from '../components/TopSection';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Wallet, 
  ArrowLeftRight, 
  ChartColumn, 
  ChartPie, 
  Lightbulb, 
  BookOpen,
  Coins,
  Eye,
  Copy,
  Share2,
  RefreshCcw,
  Rss,
  ExternalLink,
  ArrowUpRight,
  CodeXml,
} from 'lucide-react';

// Components
const DashboardCard = ({ href, bgColor, gradientFrom, gradientVia, gradientTo, icon: Icon, title, description, external }) => {
  const CardWrapper = ({ children }) => (
    external ? 
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {children}
      </a> :
      <Link href={href} className="block h-full">
        {children}
      </Link>
  );

  return (
    <div className="h-full" style={{ opacity: 1, transform: 'none' }}>
      <CardWrapper>
        <div className={`text-card-foreground rounded-xl border group relative h-full overflow-hidden transition-all duration-200 border-border/50 dark:border-border/50 ${bgColor} hover:border-primary/50 dark:hover:border-primary/50 shadow-xs hover:shadow-md`}>
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 bg-linear-to-br from-${gradientFrom} via-${gradientVia} to-${gradientTo} transition-opacity duration-300`} />
          <div className="absolute inset-0 bg-[radial-gradient(var(--primary)_0.8px,transparent_0.8px)] [background-size:16px_16px] opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-[0.07] dark:group-hover:opacity-[0.09] transition-opacity duration-200" />
          <div className="relative flex h-full flex-col space-y-4 p-6">
            <div className="flex items-start justify-between">
              <div className={`rounded-xl p-3 transition-all duration-200 bg-linear-to-br from-${gradientFrom} via-${gradientVia} to-${gradientTo} group-hover:scale-105 shadow-xs group-hover:shadow-sm`}>
                <div className="text-white">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              {external && (
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              )}
            </div>
            <div className="min-h-0 flex-1 space-y-2">
              <h3 className="tracking-tight text-base leading-none font-semibold text-foreground dark:text-foreground transition-colors duration-200">
                {title}
              </h3>
              <p className="text-sm leading-normal text-foreground/70 dark:text-foreground/80 group-hover:text-foreground/90 dark:group-hover:text-foreground/90 transition-colors duration-200">
                {description}
              </p>
            </div>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

const UserCard = () => (
  <div className="bg-card text-card-foreground rounded-xl border shadow-sm relative">
    <div className="flex flex-col space-y-1.5 p-6 relative">
      <h3 className="tracking-tight text-xl font-bold md:text-2xl">Wallet Overview</h3>
      <p className="text-muted-foreground text-sm">Manage your tokens</p>
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium size-9 absolute top-2 right-2 hover:bg-accent hover:text-accent-foreground">
        <Eye className="text-muted-foreground size-6" />
      </button>
    </div>
    <div className="p-6 pt-0 relative z-10 space-y-4">
      <div className="bg-card rounded-lg border p-3 md:p-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs md:text-sm">Daily Tokens</p>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">0 ST</span>
              <div className="flex flex-row items-center">
                <button className="flex transform flex-row items-center rounded-lg bg-linear-to-r from-orange-500 to-orange-700 px-2 py-1 leading-6 font-bold text-white transition duration-500 ease-in-out hover:scale-105 motion-safe:animate-pulse">
                  <span className="mr-2">Claim Tokens</span>
                </button>
              </div>
            </div>
          </div>
          <Wallet className="text-muted-foreground h-6 w-6" />
        </div>
      </div>
      <Link href="/wallets" className="block">
        <div className="bg-card hover:bg-accent/50 rounded-lg border p-3 transition-colors md:p-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-muted-foreground text-xs md:text-sm">Balance</p>
              <h1 className="text-lg font-bold md:text-2xl">0.00 SDA</h1>
              <p className="text-muted-foreground text-xs">≈ $0.00 USD</p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium size-9 relative z-20 h-8 w-8 hover:bg-accent hover:text-accent-foreground">
              <RefreshCcw className="text-muted-foreground h-4 w-4" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  </div>
);



const NodeDocAlert = () => (
  <Link href="/docs/node" className="block w-full">
    <div className="relative w-full border text-sm rounded-xl border-blue-500/20 bg-linear-to-br from-blue-500/5 to-indigo-500/5 p-4 shadow-sm backdrop-blur-xs transition-all duration-300 hover:from-blue-500/10 hover:to-indigo-500/10">
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-blue-500/10 p-2">
          <CodeXml className="h-4 w-4 text-blue-500" />
        </div>
        <div className="space-y-0.5">
          <div className="tracking-tight text-sm font-medium text-blue-500">
            Advanced: Node Documentation
          </div>
          <div className="text-muted-foreground text-xs">
            Technical documentation for running and configuring a SidraChain sync node.
            <span className="text-muted-foreground/70 mt-0.5 block text-[11px]">
              Recommended for experienced developers and system administrators only.
            </span>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

const SocialLink = ({ href, icon: Icon, text, className }) => (
  <a className="shrink-0" target="_blank" rel="noopener noreferrer" href={href}>
    <button className={`justify-center whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 flex items-center gap-2 transition-all duration-300 ${className}`}>
      <Icon className="h-4 w-4 text-primary" />
      {text}
    </button>
  </a>
);

// Page Component
export default function AboutPage() {
  const appCards = [
    {
      href: '/wallets',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
      gradientFrom: 'emerald-500',
      gradientVia: 'teal-500',
      gradientTo: 'cyan-500',
      icon: Wallet,
      title: 'Wallets',
      description: 'Manage your digital assets and tokens'
    },
    {
      href: '/swap',
      bgColor: 'bg-violet-50 dark:bg-violet-950/30',
      gradientFrom: 'violet-500',
      gradientVia: 'purple-500',
      gradientTo: 'fuchsia-500',
      icon: ArrowLeftRight,
      title: 'Swap',
      description: 'Trade tokens instantly with best rates'
    },
    {
      href: '/pools',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      gradientFrom: 'blue-500',
      gradientVia: 'indigo-500',
      gradientTo: 'violet-500',
      icon: ChartColumn,
      title: 'Pools',
      description: 'Explore and analyze liquidity pools'
    },
    {
      href: '/positions',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      gradientFrom: 'green-500',
      gradientVia: 'lime-500',
      gradientTo: 'emerald-500',
      icon: ChartPie,
      title: 'Positions',
      description: 'Manage your liquidity positions'
    },
    {
      href: 'https://www.sidrastart.com/',
      bgColor: 'bg-amber-50 dark:bg-amber-950/30',
      gradientFrom: 'amber-500',
      gradientVia: 'orange-500',
      gradientTo: 'yellow-500',
      icon: Lightbulb,
      title: 'Ideas',
      description: 'Explore innovative concepts and projects',
      external: true
    },
    {
      href: '/ledger',
      bgColor: 'bg-teal-50 dark:bg-teal-950/30',
      gradientFrom: 'teal-500',
      gradientVia: 'cyan-500',
      gradientTo: 'sky-500',
      icon: BookOpen,
      title: 'Ledger',
      description: 'View real-time activity'
    },
    {
      href: '/tokens',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950/30',
      gradientFrom: 'yellow-500',
      gradientVia: 'amber-500',
      gradientTo: 'orange-500',
      icon: Coins,
      title: 'Tokens',
      description: 'Explore all tokens on SidraChain'
    }
  ];
  return (
    <main className="flex w-full max-w-screen flex-col items-center justify-start px-2 py-4">
      <TopSection />
      <div className="flex w-full max-w-7xl flex-col items-center justify-center">
        <div className="flex w-full max-w-[75rem] flex-col items-center justify-center space-y-4 pb-8">
          <NodeDocAlert />
          <div className="w-full space-y-3" />
          <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ProfileCard />
              <div className="mt-4 flex gap-2">
                <button className="flex items-center gap-2 justify-center whitespace-nowrap rounded-md text-sm font-medium border bg-background shadow-xs hover:bg-accent h-9 px-4">
                  <Copy className="h-4 w-4" />
                  Copy Link
                </button>
                <button className="flex items-center gap-2 justify-center whitespace-nowrap rounded-md text-sm font-medium border bg-background shadow-xs hover:bg-accent h-9 px-4">
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
              </div>
            </div>
            <UserCard />
          </div>
          
          <section className="mx-2 w-full px-4 pb-8">
            <div className="mb-8 space-y-2">
              <h2 className="text-2xl font-bold tracking-tight text-foreground dark:text-foreground">
                Apps
              </h2>
              <p className="text-foreground/70 dark:text-foreground/80 text-sm">
                Explore Sidra Chain applications
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {appCards.map((card, index) => (
                <DashboardCard key={index} {...card} />
              ))}
            </div>
          </section>

          <div className="w-full">
            <div className="lg:hidden">
              <div className="hide-scrollbar flex gap-3 overflow-x-auto pb-2">
                <SocialLink 
                  href="https://www.sidraforums.com"
                  icon={Rss}
                  text="Forums"
                  className="border-primary/20 from-primary/5 via-background to-primary/5 hover:from-primary/10 hover:via-primary/5 hover:to-primary/10"
                />
                <SocialLink 
                  href="https://x.com/sidrachain"
                  icon={ArrowUpRight}
                  text="Follow"
                  className="from-primary/10 via-primary/5 to-primary/10 hover:from-primary/20 hover:via-primary/15 hover:to-primary/20"
                />
                <SocialLink 
                  href="https://www.sidrastart.com"
                  icon={ExternalLink}
                  text="Start"
                  className="from-primary/10 via-primary/5 to-primary/10 hover:from-primary/20 hover:via-primary/15 hover:to-primary/20"
                />
              </div>
            </div>
            
            <div className="hidden w-full grid-cols-3 gap-8 lg:grid">
              {/* Social links for large screens */}
              {[
                {
                  href: 'https://www.sidraforums.com',
                  title: 'Sidra Forums',
                  icon: Rss,
                  description: 'Discuss Sidra Chain and other topics'
                },
                {
                  href: 'https://x.com/sidrachain',
                  title: 'Follow Us',
                  icon: ArrowUpRight,
                  description: 'Stay up to date with announcements on X (formerly Twitter)'
                },
                {
                  href: 'https://www.sidrastart.com',
                  title: 'Sidra Start',
                  icon: ExternalLink,
                  description: 'Innovative launchpad platform'
                }
              ].map((link, index) => (
                <a key={index} className="group" target="_blank" rel="noopener noreferrer" href={link.href}>
                  <div className="bg-card text-card-foreground rounded-xl border shadow-sm border-primary/20 relative h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className="from-background/50 via-muted/50 to-background/50 group-hover:from-primary/10 group-hover:via-secondary/10 group-hover:to-primary/10 absolute inset-0 bg-linear-to-br opacity-50 transition-all duration-300" />
                    <div className="absolute inset-0 bg-[radial-gradient(var(--primary)_0.5px,transparent_0.5px)] [background-size:14px_14px] opacity-5 transition-opacity duration-300 group-hover:opacity-10" />
                    <div className="flex flex-col space-y-1.5 p-6 relative">
                      <h3 className="leading-none font-semibold tracking-tight flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <link.icon className="h-5 w-5 text-primary/80 group-hover:text-primary transition-colors duration-300" />
                          {link.title}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-primary/80 group-hover:text-primary opacity-0 transition-all duration-300 group-hover:opacity-100" />
                      </h3>
                      <p className="text-sm text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}