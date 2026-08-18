/** Public demo account seeded by the Spring Boot DataLoader.
 * Organizer demo credentials are intentionally not exposed in the frontend;
 * users who know them can still type them manually on the demo form.
 */
export const MOCK_CREDENTIALS = {
  viewer: {
    username: 'viewer',
    password: 'viewer123',
  },
} as const
