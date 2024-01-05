function FindProxyForURL(url, host) {
    // 如果访问特定域名，使用代理
    if (shExpMatch(host, "*.google.com") ||
        shExpMatch(host, "*.facebook.com") ||
        shExpMatch(host, "*.openai.com") ||
        shExpMatch(host, "*hentai*") ||
        shExpMatch(host, "*github*") ||
        shExpMatch(host, "*.pornhub.com")) {
        return "PROXY 192.168.68.20:5566";
    }
    // 其他所有流量直接连接
    return "DIRECT";
}