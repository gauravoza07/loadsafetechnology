import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bread-crumb py-6">
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex flex-wrap items-center text-black lg:text-lg">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const isSecondLast = index === items.length - 2;

            return (
              <span key={index} className="flex items-center">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={
                      isLast
                        ? "text-blue-600 font-medium"
                        : "text-gray-700"
                    }
                  >
                    {item.label}
                  </span>
                )}

                {!isLast && (
                  <span className="mx-2 text-gray-400">
                    {isSecondLast ? " - " : " / "}
                  </span>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
