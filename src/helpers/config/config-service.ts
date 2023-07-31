export class ConfigService {
    readonly avatarUrl: string | null = process.env.REACT_APP_AVATAR_URL || null;

    readonly backResumeUrl: string | null = process.env.REACT_APP_BACK_RESUME_URL || 'http://localhost:10001';

    readonly githubUrl: string | null = process.env.REACT_APP_GITHUB_URL || null;

    readonly linkedInUrl: string | null = process.env.REACT_APP_LINKEDIN_URL || null;

    readonly pdfDownloadUrl: string | null = process.env.REACT_APP_PDF_DOWNLOAD_URL || null;

    readonly latestRevisionYear: string | null = process.env.REACT_APP_LATEST_REVISION_YEAR || null;
}