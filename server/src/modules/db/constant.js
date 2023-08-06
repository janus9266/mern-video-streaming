
const PUBLIC_VISIBILITY = 'Public';
const PRIVATE_VISIBILITY = 'Private';
const UNLISTED_VISIBILITY = 'Unlisted';

const VIDEO_VISIBILITIES = [PUBLIC_VISIBILITY, PRIVATE_VISIBILITY, UNLISTED_VISIBILITY];



const PENDING_STATUS = "pending";
const PROCESSED_STATUS = "processed";
const PUBLISHED_STATUS = "published"

const VIDEO_STATUS = [PENDING_STATUS, PROCESSED_STATUS, PUBLISHED_STATUS];


module.exports = {
    PENDING_STATUS,
    PROCESSED_STATUS,
    PUBLISHED_STATUS,
    VIDEO_STATUS,
    PUBLIC_VISIBILITY, 
    PRIVATE_VISIBILITY, 
    UNLISTED_VISIBILITY,
    VIDEO_VISIBILITIES
}