export default function Info() {
  return (
    <section className="w-full ">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl">AWS Certifications</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <div className="space-y-2">
              <h3 className="font-semibold">AWS Certified Solutions Architect - Associate</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <CalendarDaysIcon className="h-4 w-4" />
                <span>Noviembre 2023</span>
              </div>
              <a
                href="https://www.credly.com/badges/9363b3b2-d251-40ae-9c47-37cf01483948/public_url"
                className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:underline"
                prefetch={false}
              >
                <ExternalLinkIcon className="h-4 w-4" />
                <span>View Certificate</span>
              </a>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">AWS Certified Developer - Associate</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <CalendarDaysIcon className="h-4 w-4" />
                <span>Abril 2024</span>
              </div>
              <a
                href="https://www.credly.com/badges/e5e017d2-6e0e-4bde-95f3-8b7a251dc968"
                className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:underline"
                prefetch={false}
              >
                <ExternalLinkIcon className="h-4 w-4" />
                <span>View Certificate</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function ExternalLinkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}
