export class ConfigService {
    readonly avatarUrl: string | undefined = process.env.REACT_APP_AVATAR_URL || 'https://avatars1.githubusercontent.com/u/60548405?s=460&v=4';

    readonly backResumeUrl: string | undefined = process.env.REACT_APP_BACK_RESUME_URL || 'http://localhost:10001';

    readonly githubUrl: string | undefined = process.env.REACT_APP_GITHUB_URL || undefined;

    readonly linkedInUrl: string | undefined = process.env.REACT_APP_LINKEDIN_URL || undefined;

    readonly pdfDownloadUrl: string | undefined = process.env.REACT_APP_PDF_DOWNLOAD_URL || undefined;

    readonly latestRevisionYear: string | undefined = process.env.REACT_APP_LATEST_REVISION_YEAR || undefined;
}