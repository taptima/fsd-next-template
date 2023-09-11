const validateNpmPackageName = require('validate-npm-package-name');
const regexGit = require('regex-git');
const { execSync } = require('child_process');

const PLOP_CONFIG_PATHS = [
    './plopfile.js',
    './.github',
];

const PLOP_CONFIG_MODULES = [
    'plop',
    'regex-git',
    'validate-npm-package-name',
    '@types/validate-npm-package-name'
];

function createModifyPackageJsonAction(key, value, shouldRemoveKey = false, pattern, template) {
    return {
        type: 'modify',
        path: 'package.json',
        pattern: pattern ?? (
            shouldRemoveKey
                ? new RegExp(`\\s*"${key}": "(.*)",?`, 'g')
                : new RegExp(`("${key}": ")(.*)(")`, 'g')
        ),
        template: template ?? (
            shouldRemoveKey
                ? ''
                : `$1${value}$3`
        ),
    };
}

module.exports = function (plop) {
    plop.setActionType('$prepareProject', () => {
        console.log('\nRemoving unnecessary files. It will take a while. ⏳\n');

        execSync(`yarn remove ${PLOP_CONFIG_MODULES.join(' ')}`);

        PLOP_CONFIG_PATHS.forEach((removablePath) => {
            execSync(`rm -rf ${removablePath}`);
        });

        console.log('\nUnnecessary files have been removed.\n');
    });

    plop.setActionType('$printInstructions', ({ repositoryUrl }) => {
        console.log('\n---------------------------------------\n');
        console.log('Congratulations, almost ready. What is next? 🤔\n');
        console.log('1. Remove git history of skeleton project. Run: rm -rf ./.git');
        console.log('2. Initialize new git repository. Run: git init');
        console.log('3. Index all files. Run: git add --all');
        console.log('4. Create initial commit. Run: git commit -m "Initial commit"');
        console.log(`5. Add remote git repository. Run: git remote add origin ssh://${ repositoryUrl }`);
        console.log('6. Push it. Run: git push -u origin HEAD:dev && git push -u origin HEAD:master');
        console.log('\n---------------------------------------\n');
    });

    console.log(
        '\nWelcome to project setup wizard!👋 \nI will help you to configure new project on top of this skeleton.🚀\n'
    );

    plop.setGenerator('setup', {
        description: 'application controller logic',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: '1/6 Project name (ex.: my-project)',
                validate(input) {
                    const { errors = [], warnings = [] } = validateNpmPackageName(input);

                    return [...errors, ...warnings].join(', ') || true;
                },
            },
            {
                type: 'input',
                name: 'description',
                message: '2/6 Project description',
            },
            {
                type: 'input',
                name: 'license',
                default: 'MIT',
                message: '3/6 Project licence',
            },
            {
                type: 'confirm',
                name: 'isPrivate',
                message: '4/6 Is this project gonna be private? (private by default)',
                default: true,
            },
            {
                type: 'input',
                name: 'author',
                message: '5/6 Author (email, name or website of the author of this project)',
            },
            {
                type: 'input',
                name: 'repositoryUrl',
                message: '6/6 Git repository URL',
                validate(input) {
                    return regexGit.test(input);
                }
            },
        ],
        actions(data) {
            return [
                createModifyPackageJsonAction('name', '{{ name }}'),
                createModifyPackageJsonAction('description', '{{ description }}'),
                createModifyPackageJsonAction('license', '{{ license }}', !data?.license),
                createModifyPackageJsonAction('private', '{{ isPrivate }}'),
                createModifyPackageJsonAction('author', '{{ author }}', !data?.author),
                createModifyPackageJsonAction(
                    'repository',
                    '{{ repositoryUrl }}',
                    !data?.repositoryUrl,
                    /("repository": {\n.*\n\s*"url": ")(.*)(")/g
                ),
                {
                    type: '$prepareProject',
                },
                {
                    type: '$printInstructions',
                },
            ];
        },
    });
};
