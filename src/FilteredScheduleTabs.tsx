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
                    className="block w-full text-slate-100 bg-slate-900 focus:ring-slate-300 focus:border-slate-300 rounded-md"
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
                                        ? 'border-white text-white'
                                        : 'border-slate-500 text-slate-500 hover:text-slate-100 hover:border-slate-100',
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
