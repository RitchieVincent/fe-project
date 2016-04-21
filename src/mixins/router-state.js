export default {
    checkRouterState(props, key, callbackName) {

        if (props.location.state[key]) {
            this.setState({
                loading: false,
                [key]: props.location.state[key]
            });
            return;
        }

        this.setState({
            loading: true
        });
        this[callbackName](props.routeParams[key]);

    }
}