

## Collecting Emails via Beehiiv

The simplest approach: **use Beehiiv's embedded form action URL** — no API key or backend needed.

### How to find your Beehiiv form URL

1. Go to your Beehiiv dashboard → **Settings → Subscribe Forms** (or **Grow → Forms**)
2. Create or select an embed form
3. Look for the form's `action` URL — it looks like: `https://embeds.beehiiv.com/subscribe`  
   Or you can grab the full embed code which contains a form with a hidden `publication_id` field

### What I'll change

**`src/components/EmailCaptureBar.tsx`**:
- Replace the local-state-only `handleSubmit` with a `fetch` POST to your Beehiiv subscription endpoint
- Send the email + your publication ID to Beehiiv's embed API (`https://embeds.beehiiv.com/subscribe`)
- Show loading state while submitting, error state if it fails
- Keep the current success message on success

### What I need from you

Your **Beehiiv publication ID** — you can find it in:
- Beehiiv dashboard → Settings → scroll to find your publication ID
- Or from any embed code snippet (it's in a hidden input field called `publication_id`)

Once you share that, I can wire it up immediately.

