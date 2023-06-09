import { CheckIcon, HandThumbUpIcon, UserIcon, ExclamationTriangleIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid'

const timeline = [
  {
    id: 1,
    // content: 'Applied to',
    target: 'Hepatitis B Vaccine (Hep B)',
    href: '#',
    date: 'Sep 20',
    datetime: '2020-09-20',
    icon: ExclamationTriangleIcon,
    iconBackground: 'bg-red-400',
  },
  {
    id: 2,
    // content: 'Advanced to phone screening by',
    target: 'Calmette Guerrin Vaccine (BCG)',
    href: '#',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: ExclamationCircleIcon,
    iconBackground: 'bg-yellow-500',
  },
  {
    id: 3,
    // content: 'Completed phone screening with',
    target: 'Diftero-tetano-acelular pertussis-poliomielitic- Haemophilus B- hepatitic B vaccine (DTPa-VPI-Hib-Hep. B)',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Example() {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                    )}
                  >
                    <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{' '}
                      <a href={event.href} className="font-medium text-gray-900">
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-left text-sm text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
