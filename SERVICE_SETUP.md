# Shakespeare Insult Service & Cloudflare Tunnel Setup

## Overview
This document outlines the setup for running the Shakespeare Insult Generator as a persistent background service on port `9002` and exposing it via Cloudflare Tunnel.

---

## 1. Local Systemd Service

The application runs continuously as a `systemd` user service with `Linger=yes` (starts automatically at boot without needing an active user login session).

- **Service File**: `~/.config/systemd/user/shakesphere-insult.service`
- **Working Directory**: `/home/akkshay/Developer/shakesphere-insult`
- **Exec Command**: `/home/akkshay/.nvm/versions/node/v24.15.0/bin/node server.js`
- **Port**: `9002`

### Service Management Commands
```bash
# Check status
systemctl --user status shakesphere-insult.service

# Restart service
systemctl --user restart shakesphere-insult.service

# View live logs
journalctl --user -u shakesphere-insult.service -f
```

---

## 2. Cloudflare Tunnel Integration

The local machine runs `cloudflared.service` managed remotely via Cloudflare Zero Trust.

### Active Public Domain
- **URL**: `https://insults.saltpaayasam.com`
- **Target**: `http://localhost:9002`

### Adding Alias Hostnames (Optional)
To support domain variations (e.g. `insult.saltpaayasam.com` or `shakesphere.saltpaayasam.com`):
1. Log into [Cloudflare Zero Trust Dashboard](https://one.dash.cloudflare.com/).
2. Navigate to **Networks** > **Tunnels** > Select your active tunnel > **Edit**.
3. In **Public Hostnames**, add additional hostnames pointing to `HTTP` -> `localhost:9002`.

---

## 3. Client-Side Troubleshooting (`ERR_NAME_NOT_RESOLVED`)

If a device shows `ERR_NAME_NOT_RESOLVED` when opening `https://insults.saltpaayasam.com`:

1. **Clear Chrome Host Cache**:
   - Open `chrome://net-internals/#dns` and click **Clear host cache**.
   - Open `chrome://net-internals/#sockets` and click **Flush socket pools**.
2. **Try Incognito Mode**: Open `https://insults.saltpaayasam.com` in a Private/Incognito window.
3. **Flush Local OS DNS**:
   - **Linux**: `sudo resolvectl flush-caches`
   - **macOS**: `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`
   - **Windows**: `ipconfig /flushdns`
