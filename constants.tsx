
import React from 'react';
import { ToolCategory, ToolDefinition } from './types';

export const TOOLS: ToolDefinition[] = [
  // Media Tools
  { 
    id: 'video-dl', 
    name: 'Video Downloader', 
    description: 'Download X videos in high quality.', 
    category: ToolCategory.MEDIA, 
    icon: '📹', 
    isPopular: true,
    usageSteps: [
      'Copy the link to the X post containing the video.',
      'Paste the URL into the input field above.',
      'Click "Download Video" and choose your quality.'
    ]
  },
  { 
    id: 'gif-dl', 
    name: 'GIF Downloader', 
    description: 'Save X GIFs as MP4 or GIF files.', 
    category: ToolCategory.MEDIA, 
    icon: '🎞️',
    usageSteps: [
      'Find the X post with the GIF you want to save.',
      'Copy and paste the tweet URL into the box.',
      'Our engine will convert it into a downloadable file.'
    ]
  },
  { 
    id: 'img-dl', 
    name: 'Image Downloader', 
    description: 'Download images in original resolution.', 
    category: ToolCategory.MEDIA, 
    icon: '🖼️',
    usageSteps: [
      'Copy the post URL containing the image.',
      'Paste it here to extract the original resolution.',
      'Save the full-size image directly to your device.'
    ]
  },
  { 
    id: 'space-dl', 
    name: 'Space Audio Downloader', 
    description: 'Download public X Space replays.', 
    category: ToolCategory.MEDIA, 
    icon: '🎙️',
    usageSteps: [
      'Copy the URL of the public Space replay.',
      'Paste it in the downloader field.',
      'The audio stream will be processed for download.'
    ]
  },
  { id: 'media-ext', name: 'Media Extractor', description: 'Extract all media from a specific tweet.', category: ToolCategory.MEDIA, icon: '🧬' },
  { 
    id: 'pfp-dl', 
    name: 'HD Profile Picture', 
    description: 'Download profile pictures in full size.', 
    category: ToolCategory.MEDIA, 
    icon: '👤', 
    isPopular: true,
    usageSteps: [
      'Enter the @username or paste the profile URL.',
      'Click "Search" to find the high-res avatar.',
      'Right-click or use the "Download HD" button.'
    ]
  },
  { id: 'header-dl', name: 'Header Downloader', description: 'Grab high-res profile headers.', category: ToolCategory.MEDIA, icon: '🌆' },
  { id: 'thread-dl', name: 'Thread PDF/Text', description: 'Convert threads to readable formats.', category: ToolCategory.MEDIA, icon: '📑' },
  { id: 'bookmark-export', name: 'Bookmark Exporter', description: 'Cleanly export your saved bookmarks.', category: ToolCategory.MEDIA, icon: '🔖' },
  { 
    id: 'screenshot-gen', 
    name: 'Tweet Screenshot', 
    description: 'Beautiful screenshots for sharing.', 
    category: ToolCategory.MEDIA, 
    icon: '📸', 
    isPopular: true,
    usageSteps: [
      'Copy the URL of the tweet you want to capture.',
      'Paste it and click "Generate Screenshot".',
      'Download the final PNG image for sharing.'
    ]
  },

  // Text Tools
  { 
    id: 'char-counter', 
    name: 'Character Counter', 
    description: '280 / 4,000 limits checker.', 
    category: ToolCategory.TEXT, 
    icon: '🔢',
    usageSteps: [
      'Type or paste your draft into the text area.',
      'Monitor the progress bars for both limits.',
      'Adjust your text to fit within the constraints.'
    ]
  },
  { id: 'line-breaker', name: 'Line Break Gen', description: 'Perfect spacing for your tweets.', category: ToolCategory.TEXT, icon: '⮐' },
  { id: 'bio-formatter', name: 'Bio Formatter', description: 'Make your bio stand out.', category: ToolCategory.TEXT, icon: '📝' },
  { 
    id: 'unicode-gen', 
    name: 'Unicode Font Gen', 
    description: '𝔖𝔱𝔶𝔩𝔦𝔰𝔥 𝔗𝔢𝔵𝔱 for your profile.', 
    category: ToolCategory.TEXT, 
    icon: '𝔄',
    usageSteps: [
      'Enter your desired text in the input field.',
      'Browse the generated stylized fonts below.',
      'Click the copy icon to use it on your profile.'
    ]
  },
  { id: 'emoji-tool', name: 'Emoji Copy Tool', description: 'Quick access to trending emojis.', category: ToolCategory.TEXT, icon: '😀' },
  { id: 'preview-sim', name: 'Tweet Preview', description: 'See how it looks before posting.', category: ToolCategory.TEXT, icon: '👀' },
  { id: 'case-conv', name: 'Case Converter', description: 'UPPER to lower instantly.', category: ToolCategory.TEXT, icon: 'Aa' },
  { id: 'tweet-cleaner', name: 'Tweet Cleaner', description: 'Remove links and @mentions.', category: ToolCategory.TEXT, icon: '🧹' },
  { id: 'thread-fmt', name: 'Thread Formatter', description: 'Structure your long-form content.', category: ToolCategory.TEXT, icon: '🧵' },
  { id: 'bio-link-gen', name: 'Bio Link Text', description: 'Optimize your bio link text.', category: ToolCategory.TEXT, icon: '🔗' },

  // Growth Calculators
  { 
    id: 'eng-calc', 
    name: 'Engagement Rate', 
    description: 'Calculate true engagement metrics.', 
    category: ToolCategory.GROWTH, 
    icon: '📈', 
    isPopular: true,
    usageSteps: [
      'Input the account follower count.',
      'Enter the likes, retweets, and replies for a post.',
      'The engine will calculate your quality score instantly.'
    ]
  },
  { id: 'rt-like-ratio', name: 'RT vs Like Ratio', description: 'Check your content viral health.', category: ToolCategory.GROWTH, icon: '⚖️' },
  { id: 'imp-est', name: 'Impression Estimator', description: 'Predict reach based on engagement.', category: ToolCategory.GROWTH, icon: '👁️' },
  { id: 'growth-calc', name: 'Follower Growth', description: 'Project future follower counts.', category: ToolCategory.GROWTH, icon: '🚀' },
  { id: 'deal-est', name: 'Brand Deal Price', description: 'Estimate what you should charge.', category: ToolCategory.GROWTH, icon: '💰' },
  { id: 'cpm-calc', name: 'CPM / CPC Calc', description: 'Ads ROI and cost analyzer.', category: ToolCategory.GROWTH, icon: '📊' },
  { id: 'roi-calc', name: 'ROI Calculator', description: 'Marketing spend efficiency.', category: ToolCategory.GROWTH, icon: '🎯' },
  { id: 'fake-checker', name: 'Fake Follower Check', description: 'Ratio-based audit tool.', category: ToolCategory.GROWTH, icon: '🕵️' },
  { id: 'monetize-elig', name: 'Monetization Eligibility', description: 'Check X payout requirements.', category: ToolCategory.GROWTH, icon: '💳' },
  { id: 'earnings-est', name: 'Creator Earnings', description: 'Estimated ad revenue share.', category: ToolCategory.GROWTH, icon: '💵' },

  // Design Tools
  { 
    id: 'img-resizer', 
    name: 'Image Size Resizer', 
    description: 'Perfect dimensions for X.', 
    category: ToolCategory.DESIGN, 
    icon: '📏',
    usageSteps: [
      'Upload your image from your computer.',
      'Select the target X placement (Header or Timeline).',
      'Download the resized, optimized version.'
    ]
  },
  { id: 'header-safe', name: 'Header Safe-Area', description: 'Avoid UI overlap issues.', category: ToolCategory.DESIGN, icon: '🛡️' },
  { id: 'crop-tool', name: 'Tweet Image Crop', description: 'Fix the timeline preview.', category: ToolCategory.DESIGN, icon: '✂️' },
  { id: 'aspect-ratio', name: 'Video Aspect Ratio', description: 'Check for optimal mobile viewing.', category: ToolCategory.DESIGN, icon: '📱' },
  { id: 'img-splitter', name: 'Thread Image Split', description: 'Perfectly aligned multi-images.', category: ToolCategory.DESIGN, icon: '🪟' },
  { id: 'card-preview', name: 'Card Preview Tool', description: 'See how your URL looks.', category: ToolCategory.DESIGN, icon: '🃏' },
  { id: 'mockup-gen', name: 'Mockup Generator', description: 'Place tweets in device frames.', category: ToolCategory.DESIGN, icon: '🎨' },
  { id: 'grid-preview', name: 'Post Grid Preview', description: 'Aesthetic profile planning.', category: ToolCategory.DESIGN, icon: '🕸️' },
  { id: 'space-cover', name: 'Space Cover Gen', description: 'Design catchy Space cards.', category: ToolCategory.DESIGN, icon: '📻' },
  { id: 'pfp-crop', name: 'Profile Pic Crop', description: 'Align your avatar perfectly.', category: ToolCategory.DESIGN, icon: '⭕' },

  // URL Utilities
  { 
    id: 'url-cleaner', 
    name: 'Tweet URL Cleaner', 
    description: 'Remove tracking params.', 
    category: ToolCategory.URL, 
    icon: '🧹',
    usageSteps: [
      'Paste the full X URL with tracking garbage.',
      'Click "Process" to strip the extras.',
      'Copy the clean, privacy-safe URL.'
    ]
  },
  { id: 'profile-gen', name: 'Profile URL Gen', description: 'Short custom profile links.', category: ToolCategory.URL, icon: '🔗' },
  { id: 'user-avail', name: 'Username Checker', description: 'Manual availability search.', category: ToolCategory.URL, icon: '🔍' },
  { id: 'id-finder', name: 'Twitter ID Finder', description: 'Numeric ID from username.', category: ToolCategory.URL, icon: '🆔' },
  { id: 'thread-link', name: 'Thread Link Gen', description: 'Deep links for specific threads.', category: ToolCategory.URL, icon: '🧵' },
  { id: 'hashtag-link', name: 'Hashtag Link Gen', description: 'Quick link to any hashtag.', category: ToolCategory.URL, icon: '#️⃣' },
  { id: 'reply-builder', name: 'Reply Link Builder', description: 'Direct links to replies.', category: ToolCategory.URL, icon: '💬' },
  { id: 'qr-gen', name: 'QR Code Generator', description: 'Share your profile via QR.', category: ToolCategory.URL, icon: '🏁' },
  { id: 'utm-builder', name: 'UTM Builder', description: 'Track campaign traffic.', category: ToolCategory.URL, icon: '📍' },
  { id: 'share-gen', name: 'Share Link Gen', description: 'Custom "Tweet this" links.', category: ToolCategory.URL, icon: '📤' },

  // Creator & Community
  { 
    id: 'winner-picker', 
    name: 'Giveaway Winner', 
    description: 'Fair shuffle for giveaways.', 
    category: ToolCategory.CREATOR, 
    icon: '🎁', 
    isPopular: true,
    usageSteps: [
      'Paste the list of @usernames (one per line).',
      'Click "Draw Winner" to start the animation.',
      'Screenshot the result for your community.'
    ]
  },
  { id: 'calendar-gen', name: 'Content Calendar', description: 'Plan your weekly content.', category: ToolCategory.CREATOR, icon: '📅' },
  { id: 'time-planner', name: 'Posting Time Planner', description: 'Find your peak activity.', category: ToolCategory.CREATOR, icon: '⏰' },
  { id: 'template-gen', name: 'Thread Templates', description: 'Proven structures for virality.', category: ToolCategory.CREATOR, icon: '📋' },
  { id: 'idea-spinner', name: 'Tweet Idea Spinner', description: 'Non-AI creative prompts.', category: ToolCategory.CREATOR, icon: '🌀' },
  { id: 'limit-checker', name: 'Hashtag Limit', description: 'Avoid spam shadowbans.', category: ToolCategory.CREATOR, icon: '🚫' },
  { id: 'word-blocker', name: 'Blocked Word List', description: 'Filter your notifications.', category: ToolCategory.CREATOR, icon: '🤐' },
  { id: 'rules-template', name: 'Community Rules', description: 'Templates for X Communities.', category: ToolCategory.CREATOR, icon: '📜' },
  { id: 'pinned-planner', name: 'Pinned Tweet Plan', description: 'Optimize your first impression.', category: ToolCategory.CREATOR, icon: '📌' },
  { id: 'audit-checklist', name: 'Account Audit', description: 'Step-by-step profile optimization.', category: ToolCategory.CREATOR, icon: '✅' },
];
