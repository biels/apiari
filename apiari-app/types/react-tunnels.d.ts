declare module 'react-tunnels' {
    class TunnelProvider extends React.Component {

    }

    interface TunnelPlaceholderProps {
        id: string
        multiple?: boolean
    }

    class TunnelPlaceholder extends React.Component<TunnelPlaceholderProps> {
    }

    interface TunnelProps {
        id: string
    }

    class Tunnel extends React.Component<TunnelProps> {

    }
}
