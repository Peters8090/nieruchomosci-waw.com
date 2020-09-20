import {RouteType} from '../interfaces and types/RouteType'

export function RouteLink({routeName}: RouteType, arg?: number | string) {
    const href = routeName

    let as = routeName
    const regex = /^(\/[a-zA-Z-]*)((\/)(\[{1,2}([a-zA-Z0-9.]*)]{1,2}))*$/
    const executedRegex = regex.exec(routeName)
    if (executedRegex) {
        as = executedRegex[1] + (arg ? ('/' + `${arg}`) : '')
    }

    return {href, as}
}