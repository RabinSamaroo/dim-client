function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function FilteredScheduleTabs({ tabs, viewDate, dateChangedHandler }: any) {
    return tabs ?
        <div>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    onChange={dateChangedHandler}
                    defaultValue={tabs.find((tab: any) => tab === viewDate)}
                >
                    {tabs.map((tab: any) => (
                        <option key={tab}>{tab}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex" aria-label="Tabs">
                        {tabs.map((tab: any) => (
                            <button
                                key={tab}
                                onClick={dateChangedHandler}
                                className={classNames(
                                    tab === viewDate
                                        ? 'border-indigo-500 text-indigo-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                    'w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm'
                                )}
                                aria-current={tab === viewDate ? 'page' : undefined}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
        : <></>
}
